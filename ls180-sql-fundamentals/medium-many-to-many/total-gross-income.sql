SELECT SUM(services.price) as gross
FROM services INNER JOIN customers_services
                      ON services.id = service_id;