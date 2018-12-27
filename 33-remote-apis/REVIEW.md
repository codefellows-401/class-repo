![cf](http://i.imgur.com/7v5ASc8.png) Daily Review
==================================================

**Given a links table in a SQL database, with the following structure, write a query that would return the categories and how many links are in each**
```
CREATE TABLE links (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  href VARCHAR(255),
  description TEXT,
  keywords TEXT
  category VARCHAR(50)
);

SELECT DISTINCT category, count(*) FROM links GROUP BY category;
```

---

**How would you suggest "normalizing" that table?**

```
CREATE TABLE links (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  href VARCHAR(255),
  description TEXT,
  keywords TEXT
  category_id INT REFERENCES categories(id)
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50)
);

```

---

**How can we convert that to a Mongo Model?**

---



