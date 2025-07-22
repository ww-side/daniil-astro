export const downloadFile = (url: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', url.split('/').pop() || 'file');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
