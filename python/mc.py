#!/usr/bin/python
from mcstatus import MinecraftServer
import re, socket

try:
    server = MinecraftServer("95.215.185.19", 25565)
    try:
        status = server.status()
        data = ("Online players: {0}".format(status.players.online))
        latency = status.latency
    except socket.timeout:
        data = "Online players: 0"
        latency = 'offline'
except ConnectionRefusedError:
    data = "Online players: 0"
    latency = 'offline'



if latency == 'offline':
    server_status = "<p>Server = <span style=\"color: red\">Offline</span></p>"
else:
    server_status = "<p>Server = <span style=\"color: green\">Online</span></p>"

with open("/usr/share/nginx/elemelons.net/" + 'server-status.html', 'r+') as file:
    text = file.read()
    text = re.sub('Online players: \d{1,2}', data, text)
    text = re.sub('<p>Server = <span style=\"color: (red|green)\">(Online|Offline)</span></p>', server_status, text)
    file.seek(0)
    file.write(text)
    file.truncate()
