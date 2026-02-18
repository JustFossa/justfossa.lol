import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
try {
// Get the request body
const body = await request.json();

// Forward the request to DataFast API
const response = await fetch('https://datafa.st/api/events', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(body),
});

// Get the response status
const status = response.status;

// Try to get response text (might be empty)
const text = await response.text();

// Return the response with appropriate status
return new NextResponse(text, { 
status,
headers: {
'Content-Type': 'application/json',
}
});
} catch (error) {
console.error('DataFast proxy error:', error);
return NextResponse.json(
{ error: 'Failed to forward request to DataFast' },
{ status: 500 }
);
}
}
