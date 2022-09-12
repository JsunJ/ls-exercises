SELECT customers.name, string_agg(services.description, ', ') AS services
FROM customers
LEFT OUTER JOIN customers_services
             ON customer_id = customers.id
LEFT OUTER JOIN services
             ON service_id = services.id
GROUP BY customers.id;

-- Further Exploration

SELECT CASE WHEN lag(customers.name) OVER (ORDER BY customers.name) IS NULL THEN customers.name
            WHEN lag(customers.name) OVER (ORDER BY customers.name) != customers.name THEN customers.name
            END AS name,
       services.description
FROM customers
LEFT OUTER JOIN customers_services
             ON customer_id = customers.id
LEFT OUTER JOIN services
             ON services.id = service_id;

SELECT
       CASE lag(c.name) OVER (ORDER BY c.name)
       WHEN c.name THEN '' 
       ELSE c.name
       END,
       s.description AS services
  FROM customers c
  LEFT JOIN customers_services cs ON c.id = cs.customer_id 
  LEFT JOIN services s ON cs.service_id = s.id;