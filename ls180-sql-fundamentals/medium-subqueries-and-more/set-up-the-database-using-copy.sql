CREATE DATABASE auction
\c auction

CREATE TABLE bidders (
  id serial PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE items (
  id serial PRIMARY KEY,
  name text NOT NULL,
  initial_price numeric(6, 2) NOT NULL
    CHECK (initial_price >= 0.01 AND initial_price <= 1000.00),
  sales_price numeric(6, 2)
    CHECK (sales_price >= 0.01 AND sales_price <= 1000.00)
);

CREATE TABLE bids (
  id serial PRIMARY KEY,
  bidder_id integer NOT NULL REFERENCES bidders(id) ON DELETE CASCADE,
  item_id integer NOT NULL REFERENCES items(id) ON DELETE CASCADE,
  amount numeric(6, 2) NOT NULL
    CHECK (amount >= 0.01 AND amount <= 1000.00)
);

CREATE INDEX ON bids (bidder_id, item_id);

\copy bidders FROM '~/Dev/bidders.csv' WITH HEADER CSV;
\copy items FROM '~/Dev/items.csv' WITH HEADER CSV;
\copy bids FROM '~/Dev/bids.csv' WITH HEADER CSV;