/* PopUps de sucesso, aviso, erro e info */

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const tempo = 10000;

export const successfulNotify = (mensagem: string) => {
  toast.success(mensagem, {autoClose: tempo});
}

export const errorfulNotify = (mensagem: string) => {
  toast.error(mensagem, {autoClose: tempo});
}

export const warnNotify = (mensagem: string) => {
  toast.warn(mensagem, {autoClose: tempo});
}

export const infoNotify = (mensagem: string) => {
  toast.info(mensagem, {autoClose: tempo});
}