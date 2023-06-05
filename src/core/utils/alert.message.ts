import Swal from 'sweetalert2'

export default class AlertMessage {
    static showAlertWithTimer(msg: string, type: 'success' | 'warning') {
        if (msg)
            Swal.fire({
                position: 'top-end',
                icon: type,
                title: msg,
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false
            })
    }
}
