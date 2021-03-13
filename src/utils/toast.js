import React from 'react';
import { toast } from 'react-toastify';

export const showFlash = (type, content) => {
  switch (type) {
    case 'error':
      toast.error(<p className="h6">{content}</p>)
      break;

    case 'info':
      toast.info(<p className="h6">{content}</p>)
      break;

    case 'success':
      toast.success(<p className="h6">{content}</p>)
      break;

    default:
      break;
  }
}
