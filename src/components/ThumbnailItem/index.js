// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, key, updateImageId, isActiveImage} = props

  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const isActiveImageId = isActiveImage ? 'active-img' : 'inactive-img'

  console.log(id)
  console.log(thumbnailDetails)
  console.log(key)

  const onUpdateImage = () => {
    updateImageId(id)
  }

  return (
    <li>
      <button type="button" className={`thumbnail ${isActiveImageId}`}>
        <img
          src={thumbnailUrl}
          className="thumbnail"
          alt={thumbnailAltText}
          onClick={onUpdateImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
