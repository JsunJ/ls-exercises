UPDATE parts
SET device_id = 1
WHERE part_number = 7 OR part_number = 8;

-- Further Exploration

UPDATE parts
   SET device_id = 2 
 WHERE part_number = 
       (SELECT min(part_number) 
          FROM parts);