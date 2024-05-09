interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

const entry: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};