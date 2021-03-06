export function required(value: string): string {
  if (!value) {
    return 'Required field'
  }
  return ''
}

export function name(value: string): string {
  let error
  error = required(value)
  if (!error && !/^([A-Za-z\s]*)$/.test(value)) {
    error = 'Enter a valid name'
  }
  return error
}

export function phone(value: string): string {
  let error
  error = required(value)
  if (!error && !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value)) {
    error = 'Enter a valid phone number'
  }
  return error
}
