# #!/bin/bash
# output=$(./verificaMapa.sh)

# stop_script() {
#   echo "Comando específico encontrado: $1"
#   exit 1
# }

# # Conte o número de linhas na saída
# line_count=$(echo "$output" | wc -l)

# echo "===================================================================="
# echo "Contando linhas do mapa..."
# echo "===================================================================="

# echo "===================================================================="
# echo "Conteúdo do mapa:"
# echo "$output"
# echo "===================================================================="

# echo "===================================================================="
# echo "Número de linhas do mapa: $line_count"
# echo "===================================================================="

# # Verifique se o número de linhas é maior que 3
# if [ "$line_count" -gt 1 ]; then
#     stop_script "Mapa esta incorreto, verificar."
# else
#     echo "Mapa correto, continuando a geração."
# fi

#!/bin/bash
output=$(./verificaMapa.sh)

stop_script() {
  echo "Comando específico encontrado: $1"
  exit 1
}

# Conte o número de linhas na saída
line_count=$(echo "$output" | wc -l)

# Verifique se o número de linhas é maior que 3
if [ "$line_count" -gt 1 ]; then
    echo "===================================================================="
    echo "Conteúdo do mapa:"
    echo "$output"
    echo "===================================================================="
    stop_script ""
else
    echo "Mapa correto, continuando a geração."
fi