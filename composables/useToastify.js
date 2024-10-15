import toastr from 'toastr'

const toastifyOption = {
    showDuration: 500,
    progressBar: true,
    closeDuration: true,
    tapToDismiss: true,
    debug: false,
    positionClass: 'toast-bottom-center',
    showMethod: 'show',
    hideDuration: 500,
    closeMethod: true,
    closeEasing: true,
    timeOut: 5000,
    closeButton: true,
    // onclick: null,
    closeHtml: '<button class="btn" style="background-color: grey; padding: 5px;">&times;</button>',
    allowHtml: true
};

export default function useToastify (_text, _title = ""){
    return toastr.success(_text, _title, toastifyOption)
}