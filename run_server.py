import http.server
import socketserver
import webbrowser
import threading
import os
import sys
import time

# Host configuration
PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class LocalHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Serve from the directory where this script is located
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run_server():
    global PORT
    # Fail-safe mechanism to find an open port starting from 8000
    while True:
        try:
            with socketserver.TCPServer(("", PORT), LocalHTTPRequestHandler) as httpd:
                print("=" * 65)
                print("  PenaViajes Oviedo - Servidor Local Activado")
                print("=" * 65)
                print(f"  [+] Direccion de acceso: http://localhost:{PORT}")
                print(f"  [+] Directorio activo:   {DIRECTORY}")
                print("  [+] Presiona [Ctrl + C] en esta consola para detener.")
                print("=" * 65)
                
                # Launch default web browser automatically
                threading.Thread(target=launch_browser, daemon=True).start()
                
                httpd.serve_forever()
        except OSError:
            # If port is in use, increment and try again
            PORT += 1

def launch_browser():
    time.sleep(0.5) # Small buffer to let the server bind first
    webbrowser.open(f"http://localhost:{PORT}")

if __name__ == "__main__":
    try:
        run_server()
    except KeyboardInterrupt:
        print("\n  [-] Servidor detenido con exito. Aupa Oviedo!")
        sys.exit(0)
