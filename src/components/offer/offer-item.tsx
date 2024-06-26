import { Link } from 'react-router-dom';
import type { TOffer } from '../../types/offers';
import { getStrStartWithCapitalLetters } from '../../utils';
import { AppRoute } from '../../const';
import MemorizedFavorite from '../ui/favorite';
import MemorizedPremium from '../ui/premium';
import MemorizedRating from '../ui/rating';

type OfferItemProps = {
  offer: TOffer;
  isOfferItem?: boolean;
  isFavorites?: boolean;
  onOfferHover?: (offer?: TOffer) => void;
}

function OfferItem ({offer, isOfferItem, isFavorites, onOfferHover}: OfferItemProps) : JSX.Element {
  const {id, title, type, price, previewImage, isFavorite, isPremium, rating} = offer;

  let offerItemClass = 'near-places';
  let imageWidth = 260;
  let imageHeight = 200;

  if (isOfferItem) {
    offerItemClass = 'cities';
  } else if (isFavorites) {
    offerItemClass = 'favorites';
    imageWidth = 150;
    imageHeight = 110;
  }

  return (
    <article
      className={`${offerItemClass}__card place-card`}
      onMouseEnter={() => onOfferHover && onOfferHover(offer)}
      onMouseLeave={() => onOfferHover && onOfferHover()}
    >
      {isPremium && <MemorizedPremium isOfferCard/>}
      <div className={`${offerItemClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt={title}/>
        </Link>
      </div>
      <div className={`${offerItemClass}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <MemorizedFavorite isOfferCard isFavorite={isFavorite} id={id}/>
        </div>
        <MemorizedRating isOfferCard rating={rating}/>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{getStrStartWithCapitalLetters(type)}</p>
      </div>
    </article>
  );
}

export default OfferItem;
