export default function formatStatus(status: string) {
  if (status === '' || status === "NAO_INICIADO") {
    return 'Não iniciado';
  }

  if (status === "CONCLUIDO") {
    return 'Concluído';
  }

  if (status === "ATRASADO") {
    return 'Atrasado'
  }

  if (status === "EM_ANDAMENTO") {
    return 'Em andamento';
  }
}