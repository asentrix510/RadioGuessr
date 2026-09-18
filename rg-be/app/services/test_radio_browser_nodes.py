
from app.services.radio_browser import (
    discover_radio_browser_servers
)


servers = discover_radio_browser_servers()

print("\nDiscovered Radio Browser servers:")

for server in servers:
    print(server)