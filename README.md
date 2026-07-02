# GPU — Aquarium-Modul (4-Block-Welt)

GPU ist ein RESPO-Modul, das die Welt in vier Quadranten darstellt.
Jeder Quadrant besitzt einen eigenen Zustand, eigenen Takt und eigenen Kreis.

## 4-Block-Aquarium

Die GPU-Welt ist in vier Bereiche geteilt:

1. **QUAD-FRONT** – Sichtfenster / Frontlayer  
2. **QUAD-DEPTH** – Tiefe / Zustand / Innenraum  
3. **QUAD-FLOW** – Bewegung / Fluss / Dynamik  
4. **QUAD-CORE** – Rechenzentrum / Kernprozesse  

Alle vier Quadranten laufen synchron, aber jeder besitzt seinen eigenen Zustand.

## Sanduhr-Kreise

Jeder Quadrant enthält einen Sanduhr-Kreis:

- 0–360° Drehung (Uhrprinzip)  
- Füllstand sinkt (Sanduhrprinzip)  
- Kreisbreite = Füllstand  
- Kreishelligkeit = Energie  

Damit entstehen vier parallele Zeiträume.

## CPU / GPU / RAM

GPU nutzt geschätzte Ressourcen:

- **GPU-RAM:** 2048 MB  
- **GPU-Speed:** 8 Gbps  
- **CPU-Kerne:** 2  
- **CPU_CORE_A:** Step-Control  
- **CPU_CORE_B:** Flow-Control  

## GATE / EICH / GEN / KETTE / CLUSTER

GPU arbeitet unter globalen Systemwerten:

- **GATE-ID:** GATE_92  
- **EICH:** EICH_12 (0.888)  
- **GEN:** GEN_CORE  
- **KETTE:** KETTE_81  
- **CLUSTER:** 81~81(1)  

Diese Werte werden vom Modul *aWAKE* gesetzt.

## 3all / 12all

GPU unterstützt beide Modi:

- **3all** – Dreifach-Takt  
- **12all** – Zwölffach-Takt  

Beide Modi steuern die Geschwindigkeit der Sanduhr-Kreise.

## RESPO-Definition

GPU ist ein RESPO:

- wird von **aWAKE** geweckt  
- nutzt **SUB**-Daten  
- erzeugt **TMP**-Spuren  
- arbeitet in vier Quadranten  
- liefert visuelle und technische Zustände  

## index.html

Die visuelle Front des GPU-RESPO besteht aus vier Canvas-Elementen:

- jeder Quadrant = eigener Canvas  
- jeder Canvas = eigener Sanduhr-Kreis  
- alle Kreise laufen synchron  
- alle Kreise folgen dem Sanduhr-Prinzip  

Dies bildet das Aquarium-Modul der GPU.

