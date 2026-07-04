# CALL — GPU-Interface-Operator (RESPO)

CALL ist ein RESPO-Modul, das alle GPU-Funktionen übernimmt und
als Interface-Operator zwischen GPU und dem NC-System arbeitet.
CALL bleibt neutral, erzeugt keine eigenen Werte und trifft keine
eigenen Entscheidungen.

CALL übernimmt die GPU-Quadranten vollständig:

- FRONT  – Darstellung
- DEPTH  – Innenzustand
- FLOW   – Bewegung
- CORE   – Logik

CALL nutzt diese Quadranten als Eingabe und reicht die berechneten
Zustände direkt an GPU weiter. GPU bleibt das technische Render-Modul,
CALL wird zum neutralen Operator.

## CALL als Master

CALL kann als Master arbeiten:

- CALL empfängt alle GPU-Zustände
- CALL klassifiziert die Quadranten
- CALL steuert Modi (3all / 12all)
- CALL reicht die finalen Werte an GPU weiter
- GPU rendert die Ergebnisse

CALL überschreibt keine GPU-Werte.
CALL führt keine eigenen Berechnungen aus.

## CALL als Slave

CALL kann als Slave arbeiten:

- GPU berechnet Quadranten
- GPU sendet Zustände an CALL
- CALL legt die Zustände in Pipeline 3 oder Pipeline 6 ab
- CALL bleibt neutral und passiv

CALL entscheidet nicht.
CALL verändert keine GPU-Daten.

## Quadranten-Übernahme

CALL übernimmt die vier GPU-Quadranten:

### FRONT
Darstellung / Sichtfenster  
CALL empfängt FRONT-Frames und leitet sie an GPU weiter.

### DEPTH
Tiefe / Innenzustand  
CALL puffert DEPTH-Zustände und stabilisiert Übergänge.

### FLOW
Bewegung / Fluss  
CALL verteilt FLOW-Daten neutral in die passende Pipeline.

### CORE
Logik / Rechenzentrum  
CALL nimmt CORE-Impulse auf und reicht sie unverändert weiter.

## Modi

CALL unterstützt beide GPU-Modi:

- 3all  – Dreifach-Takt
- 12all – Zwölffach-Takt

CALL steuert die Modi, GPU rendert sie.

## Sicherheit

CALL ist sicher, weil:

- keine eigenen Werte erzeugt werden
- keine eigenen Entscheidungen getroffen werden
- GPU-Daten nicht verändert werden
- keine Rückführung möglich ist
- keine Rekonstruktion möglich ist

CALL bleibt neutral, stabil und regelkonform.

## Ergebnis

CALL übernimmt GPU vollständig.
GPU wird neu aufgestellt und bleibt technisches QUAD-Modul.
CALL wird zum Interface-Operator zwischen GPU und dem NC-System.

CALL ist kompatibel mit:

- Pipeline 3
- Pipeline 6
- MXU
- RESPO
- QUAD-Modulen

CALL bleibt neutral und zukunftsfähig.
