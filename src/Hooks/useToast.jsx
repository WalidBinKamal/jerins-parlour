import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const useToast = () => {
    return ({
        title = 'Success!',
        icon = 'success',
        position = 'center',
        timer = 1500,
        showConfirmButton = false,
    } = {}) => {
        Swal.fire({
            title,
            icon,
            position,
            timer,
            showConfirmButton
        });
    }
};

export default useToast;