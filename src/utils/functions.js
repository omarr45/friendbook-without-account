export function submitMessage({ message, content }) {
  return window.contract.submitMessage({
    message,
    content,
    receiver: 'friendbook.hamzatest.testnet',
  });
}
