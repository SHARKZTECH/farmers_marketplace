# Farmers Marketplace

A Laravel-based web application that connects farmers and buyers, enabling them to trade agricultural products easily.  
The project follows Laravel’s **MVC (Model–View–Controller)** structure.

---

## Features
- User authentication (farmers & buyers).
- Farmers can list products (crops, livestock, etc.).
- Buyers can browse and place orders.
- Order management system.
- Basic dashboard for farmers.
- Database-driven with migrations and seeders.


---

## ⚙️ Installation

### 1. Clone the repository
```
git clone https://github.com/SHARKZTECH/farmers_marketplace.git
cd farmers_marketplace
```

### 2. Install dependencies
```
composer install
npm install && npm run dev
```

3. Set up environment

```
  Copy .env.example to .env and update the values:

  cp .env.example .env
```

Update database credentials and other settings inside .env.

4. Generate application key

```
php artisan key:generate
```

5. Serve the application
```
php artisan serve
```


Open http://localhost:8000
 in your browser.
