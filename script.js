const handleGetFormData = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    email,
    city,
    zipCode,
    status,
  };
};

function isNumber(string) {
  if (isNaN(string)) {
    return false;
  }
  return true;
}

const checkboxIsChecked = () => {
  const status = document.getElementById("status").checked;
  if (status) {
    return true;
  } else {
    return false;
  }
};

function validateFormData(data) {
  if (
    data.name == null ||
    data.city == null ||
    data.email == null ||
    data.zipCode == null ||
    !checkboxIsChecked() ||
    !isNumber(data.zipCode)
  )
    return false;
  return true;
}

function submit() {
  event.preventDefault();
  const warning = document.getElementById("warning");
  if (!validateFormData(handleGetFormData())) {
    warning.style.display = "block";
    warning.innerHTML = "Periksa form anda sekali lagi";
  } else {
    warning.innerHTML = "Berhasil";
  }
}

const submitForm = document.getElementById("submit-form");

submitForm.addEventListener("click", submit);