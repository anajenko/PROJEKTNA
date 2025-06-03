# Projektna naloga NUIKS – Evidenca obiskov

Full-stack spletna aplikacija za evidenco obiskov; beležita se čas in ip naslov (javni) dostopa.

## Uporabljene tehnologije

* frontend: Angular

* backend: FastAPI (Python)

* podatkovna baza: MySQL

* orkestracija: Docker + Docker Compose

* spletni strežnik: Nginx

## Struktura projekta

<table>
  <tr><td>├── visit-frontend/</td> <td style="padding-left: 2cm;">  --> Angular projekt (uporabniški vmesnik)</td></tr>
  <tr><td>├── main.py</td>          <td style="padding-left: 2cm;">  --> FastAPI vstopna točka</td></tr>
  <tr><td>├── models.py</td>        <td style="padding-left: 2cm;">  --> SQLAlchemy modeli</td></tr>
  <tr><td>├── schemas.py</td>       <td style="padding-left: 2cm;">  --> Pydantic sheme</td></tr>
  <tr><td>├── Dockerfile</td>       <td style="padding-left: 2cm;">  --> Docker datoteka za backend</td></tr>
  <tr><td>├── docker-compose.yml</td><td style="padding-left: 2cm;">  --> Docker Compose konfiguracija</td></tr>
  <tr><td>└── README.md</td>        <td style="padding-left: 2cm;">  --> dokumentacija</td></tr>
</table>

## Zagon (Docker)

1. Kloniraj repozitorij:

   ```bash
   git clone https://github.com/anajenko/PROJEKTNA.git
   cd PROJEKTNA

2. Zgradi in zaženi aplikacijo z Docker Compose:

   ```bash
   sudo docker-compose up --build

3. Aplikacija bo na voljo na:
   - Frontend: http://212.101.137.109:4201
   - Primer API zahteve: http://212.101.137.109:8001/visits
   - API dokumentacija: http://212.101.137.109:8001/docs


