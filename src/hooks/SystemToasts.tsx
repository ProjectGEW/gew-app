import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const successfulNotify = (message: string) => {
  toast.success(message)
}

export const errorfulNotify = (message: string) => {
  toast.error(message)
}