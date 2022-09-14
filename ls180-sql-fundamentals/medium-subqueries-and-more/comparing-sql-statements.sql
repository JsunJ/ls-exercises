EXPLAIN ANALYZE SELECT MAX(bid_counts.count) FROM
  (SELECT COUNT(bidder_id) FROM bids GROUP BY bidder_id) AS bid_counts;
--                                                   QUERY PLAN
-- ---------------------------------------------------------------------------------------------------------------
--  Aggregate  (cost=37.15..37.16 rows=1 width=8) (actual time=0.081..0.082 rows=1 loops=1)
--    ->  HashAggregate  (cost=32.65..34.65 rows=200 width=12) (actual time=0.070..0.075 rows=6 loops=1)
--          Group Key: bids.bidder_id
--          Batches: 1  Memory Usage: 40kB
--          ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4) (actual time=0.023..0.030 rows=26 loops=1)
--  Planning Time: 0.316 ms
--  Execution Time: 0.201 ms
-- (7 rows)

EXPLAIN ANALYZE SELECT COUNT(bidder_id) AS max_bid FROM bids
  GROUP BY bidder_id
  ORDER BY max_bid DESC
  LIMIT 1;
--                                                      QUERY PLAN
-- ---------------------------------------------------------------------------------------------------------------------
--  Limit  (cost=35.65..35.65 rows=1 width=12) (actual time=0.102..0.103 rows=1 loops=1)
--    ->  Sort  (cost=35.65..36.15 rows=200 width=12) (actual time=0.100..0.101 rows=1 loops=1)
--          Sort Key: (count(bidder_id)) DESC
--          Sort Method: top-N heapsort  Memory: 25kB
--          ->  HashAggregate  (cost=32.65..34.65 rows=200 width=12) (actual time=0.065..0.067 rows=6 loops=1)
--                Group Key: bidder_id
--                Batches: 1  Memory Usage: 40kB
--                ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4) (actual time=0.041..0.045 rows=26 loops=1)
--  Planning Time: 0.236 ms
--  Execution Time: 0.189 ms
-- (10 rows)