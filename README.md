# GPU — 4-Quadranten-Renderer

GPU ist ein technisches Modul, das vier parallele Zustände rendert.
Jeder Zustand läuft in einem eigenen Quadranten und besitzt einen eigenen Takt.

## Quadranten

GPU nutzt vier Bereiche:

1. **FRONT** – Sichtfenster / Darstellung
2. **DEPTH** – Tiefe / Innenzustand
3. **FLOW** – Bewegung / Fluss
4. **CORE** – Rechenzentrum / Logik

Jeder Quadrant wird separat berechnet und separat gerendert.

## Sanduhr-Kreise

Jeder Quadrant enthält einen Kreis mit:

- 0–360° Rotation  
- Füllstand (Abbau)  
- Energie (Helligkeit)  
- eigenem Takt  

Die Kreise laufen synchron, aber jeder besitzt seinen eigenen Zustand.

## Ressourcen

GPU nutzt geschätzte Systemwerte:

- **GPU-RAM:** 2048 MB  
- **GPU-Speed:** 8 Gbps  
- **CPU-Kerne:** 2  
- **CORE_A:** Step-Control  
- **CORE_B:** Flow-Control  

## Systemwerte

GPU übernimmt globale Werte:

- **GATE:** GATE_92  
- **EICH:** EICH_12  
- **KETTE:** KETTE_81  
- **CLUSTER:** 81~81(1)  

## Modi

GPU unterstützt zwei Modi:

- **3all** – Dreifach-Takt  
- **12all** – Zwölffach-Takt  

Beide Modi steuern die Geschwindigkeit der Kreise.

## Dateien

## index.html

Die Oberfläche besteht aus vier Canvas-Elementen:

- jeder Quadrant = eigener Canvas  
- jeder Canvas = eigener Kreis  
- alle Kreise laufen synchron  

## gpu.js

gpu.js steuert:

- Quadranten  
- Kreise  
- Takte  
- Abbau  
- Energie  
- Modi (3all/12all)  
- Systemwerte  

## QUAD-Module

Jedes QUAD-Modul berechnet seinen eigenen Zustand:

- **front.js** – Darstellung  
- **depth.js** – Tiefe  
- **flow.js** – Bewegung  
- **core.js** – Logik  


