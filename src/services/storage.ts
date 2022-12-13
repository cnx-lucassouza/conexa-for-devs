import { ConexaStorageClient } from '@conexasaude/storage'

export const StorageClient = new ConexaStorageClient(
  process.env.REACT_APP_STORAGE_HOST,
)

StorageClient.onConnect()
  .then(() => {
    console.log('Conexa Storage Conected')
  })
  .catch(err => console.log('Conexa Storage error<>>', err))

export default StorageClient
