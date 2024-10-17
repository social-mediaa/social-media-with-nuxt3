import toastr from "toastr";

const toastifyOption = {
  showDuration: 500,
  progressBar: true,
  closeDuration: true,
  tapToDismiss: true,
  debug: false,
  positionClass: "toast-bottom-center",
  showMethod: "show",
  hideDuration: 500,
  closeMethod: true,
  closeEasing: true,
  timeOut: 5000,
  closeButton: true,
  // onclick: null,
  closeHtml:
    '<button class="btn" style="background-color: grey; padding: 5px;">&times;</button>',
  allowHtml: true,
};

export default () => {
  const SuccessToastify = (_text, _title = "") => {
    return toastr.success(_text, _title, toastifyOption);
  };
  const InformToastify=(_text, _title = "")=> {
     return toastr.info(_text, _title, toastifyOption)
  }

  const WarningToastify=(_text, _title = "")=> {
      return toastr.warning(_text, _title, toastifyOption)
  }
  const ErrorToastify=(_text, _title = "")=> {
      return toastr.error(_text, _title,toastifyOption)
  }

  return {
    SuccessToastify,
    InformToastify,
    WarningToastify,
    ErrorToastify
  };
};



