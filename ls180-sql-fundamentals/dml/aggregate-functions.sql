SELECT devices.name, count(parts.id) 
FROM devices LEFT OUTER JOIN parts ON devices.id = parts.device_id
GROUP BY devices.name;