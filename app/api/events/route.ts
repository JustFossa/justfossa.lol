import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		// Get the request body
		const body = await request.json();
		
		// Create abort controller for timeout
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
		
		// Forward relevant headers from the original request
		const headers: HeadersInit = {
			'Content-Type': 'application/json',
		};
		
		// Forward User-Agent if present
		const userAgent = request.headers.get('user-agent');
		if (userAgent) {
			headers['User-Agent'] = userAgent;
		}
		
		// Forward the request to DataFast API
		const response = await fetch('https://datafa.st/api/events', {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
			signal: controller.signal,
		});
		
		clearTimeout(timeoutId);

		// Get the response status and content-type
		const status = response.status;
		const contentType = response.headers.get('content-type') || 'application/json';
		
		// Get response text (DataFast API typically returns empty response)
		const text = await response.text();
		
		// Return the response with appropriate status and content-type
		return new NextResponse(text, { 
			status,
			headers: {
				'Content-Type': contentType,
			}
		});
	} catch (error) {
		console.error('DataFast proxy error:', error);
		
		// Handle timeout specifically
		if (error instanceof Error && error.name === 'AbortError') {
			return NextResponse.json(
				{ error: 'Request to DataFast timed out' },
				{ status: 504 }
			);
		}
		
		return NextResponse.json(
			{ error: 'Failed to forward request to DataFast' },
			{ status: 500 }
		);
	}
}
