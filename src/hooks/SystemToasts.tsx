/* PopUps de sucesso, aviso e erro */

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const successfulNotify = (mensagem: string) => {
  toast.success(mensagem);
}

export const errorfulNotify = (mensagem: string) => {
  toast.error(mensagem);
}

export const warnNotify = (mensagem: string) => {
  toast.warn(mensagem);
}