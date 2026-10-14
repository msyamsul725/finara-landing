# Deploy situs Finara ke VPS

**Domain produksi:** [https://www.finara.co.id/](https://www.finara.co.id/)  
Repo: [finara-landing](https://github.com/CloudnowDevelopment/finara-landing.git)

Situs **statis** (Astro → Nginx di Docker). Tidak ada Postgres/Redis.

| Path VPS | Fungsi |
|----------|--------|
| `/opt/bookkeeping`, `/opt/bookkeeping_web` | Layanan lain — **jangan ubah** |
| `/opt/finara-landing` | Situs Finara (repo ini) |

Container: port host **`8080`** → Nginx **`80`** di dalam image.

---

## 1. DNS (Hostinger)

Domain saat ini masih **parked** di Hostinger — arahkan ke VPS sebelum go-live:

| Type | Name | Value | Catatan |
|------|------|-------|---------|
| A | `@` | IP publik VPS | `finara.co.id` |
| A atau CNAME | `www` | IP VPS atau `@` | `www.finara.co.id` |

Canonical build: **`https://www.finara.co.id`** (tanpa slash di akhir). Redirect `finara.co.id` → `www` bisa di Nginx host atau panel DNS.

---

## 2. SSH & clone

```bash
ssh cloudnow@100.90.99.214

sudo mkdir -p /opt/finara-landing
sudo chown "$USER:$USER" /opt/finara-landing
git clone https://github.com/CloudnowDevelopment/finara-landing.git /opt/finara-landing
cd /opt/finara-landing
```

---

## 3. Build & jalankan

```bash
cd /opt/finara-landing
cp .env.example .env   # SITE_URL=https://www.finara.co.id

docker compose up -d --build
curl -sI http://127.0.0.1:8080/ | head -5
```

Cek: `/`, `/privacy/`, `/terms/`.

---

## 4. Nginx di host

Site **baru** — jangan edit config bookkeeping:

```bash
sudo tee /etc/nginx/sites-available/finara.co.id > /dev/null <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name finara.co.id www.finara.co.id;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/finara.co.id /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

SSL: Certbot di VPS, atau Cloudflare proxied (sesuaikan `X-Forwarded-Proto`).

---

## 5. Update rilis

```bash
cd /opt/finara-landing
git pull origin main
docker compose up -d --build
```

---

## Perintah singkat

```bash
cd /opt/finara-landing
docker compose ps
docker compose logs -f finara
```

| Masalah | Cek |
|---------|-----|
| 502 | `docker compose ps`, `curl http://127.0.0.1:8080/` |
| Port bentrok | `"8081:80"` di `docker-compose.yml` |
