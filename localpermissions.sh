# convert files only
find * ! -type d -exec chmod 644 {} \;
# convert directories only
find * -type d -exec chmod 711 {} \;

chmod 755 localpermissions.sh
