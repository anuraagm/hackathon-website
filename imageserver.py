import os
import http.server
import socketserver

PORT = 8001
DIRECTORY = '.'  # The root directory to serve files from

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        http.server.SimpleHTTPRequestHandler.end_headers(self)

    def do_GET(self):
        if self.path.endswith('.png'):  # Only allow access to PNG files
            # Call the base class method to serve the file
            return http.server.SimpleHTTPRequestHandler.do_GET(self)
        else:
            # Send a 403 Forbidden error for all other requests
            self.send_response(403)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'Access denied.')

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving files from '{DIRECTORY}' on port {PORT}...")
    httpd.serve_forever()

