#!/usr/bin/python3
import cgi

print("testing"),

form = cgi.FieldStorage()

message = form.cgi.getvalue("username")

print()
