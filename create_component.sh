#!/bin/bash
lerna create $1 --yes
dir=$(pwd)
lerna add --dev @artefactos/builder --scope=$1
lerna add react --peer --scope=$1
lerna add $1 --scope=@artefactos/proveedores
