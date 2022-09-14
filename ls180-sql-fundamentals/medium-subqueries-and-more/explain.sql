EXPLAIN SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);
--                                 QUERY PLAN
-- --------------------------------------------------------------------------
--  Hash Join  (cost=33.38..66.47 rows=635 width=32)
--    Hash Cond: (bidders.id = bids.bidder_id)
--    ->  Seq Scan on bidders  (cost=0.00..22.70 rows=1270 width=36)
--    ->  Hash  (cost=30.88..30.88 rows=200 width=4)
--          ->  HashAggregate  (cost=28.88..30.88 rows=200 width=4)
--                Group Key: bids.bidder_id
--                ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4)
-- (7 rows)

EXPLAIN ANALYZE SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);
--                                                      QUERY PLAN
-- ---------------------------------------------------------------------------------------------------------------------
--  Hash Join  (cost=33.38..66.47 rows=635 width=32) (actual time=0.178..0.184 rows=6 loops=1)
--    Hash Cond: (bidders.id = bids.bidder_id)
--    ->  Seq Scan on bidders  (cost=0.00..22.70 rows=1270 width=36) (actual time=0.065..0.066 rows=7 loops=1)
--    ->  Hash  (cost=30.88..30.88 rows=200 width=4) (actual time=0.083..0.084 rows=6 loops=1)
--          Buckets: 1024  Batches: 1  Memory Usage: 9kB
--          ->  HashAggregate  (cost=28.88..30.88 rows=200 width=4) (actual time=0.051..0.054 rows=6 loops=1)
--                Group Key: bids.bidder_id
--                Batches: 1  Memory Usage: 40kB
--                ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4) (actual time=0.023..0.027 rows=26 loops=1)
--  Planning Time: 0.260 ms
--  Execution Time: 0.244 ms
-- (11 rows)