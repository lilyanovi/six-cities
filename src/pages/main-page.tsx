import { useCallback, useMemo, useState } from 'react';
import { Nullable } from 'vitest';
import Map from '../components/map/map';
import Offers from '../components/offer/offers';
import Sort from '../components/sort/sort';
import type { TOffer } from '../types/offers';
import OfferEmpty from '../components/offer/offer-empty';
import { useAppSelector } from '../hooks';
import { PlacesOption } from '../const';
import { getCurrentOffersList, getSortOffersList } from '../utils';
import { selectCity, selectOffers } from '../store/offers-process/offers-process.selectors';
import MemorizedTabs from '../components/tabs/tabs';

function MainPage(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const [sortType, setSortType] = useState<PlacesOption>(PlacesOption.Popular);
  const [showSort, setShowSort] = useState<boolean>(false);

  const offers = useAppSelector(selectOffers);
  const currentCity = useAppSelector(selectCity);

  const sortOffers = useMemo(() => {
    const currentOffers = getCurrentOffersList(offers, currentCity);
    return getSortOffersList(sortType, currentOffers);
  }, [offers, currentCity, sortType]);

  const onOfferHover = useCallback((offer?: TOffer) => {
    setActiveOffer(offer || null);
  }, []);

  const onSortActive = useCallback((activeSortType: PlacesOption) => {
    if(activeSortType !== sortType) {
      setSortType(activeSortType);
    }
    setShowSort(!showSort);
  }, [showSort, sortType]);

  const isEmptyOffers = sortOffers.length === 0;

  return (
    <main className={`page__main page__main--index${isEmptyOffers ? ' page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <MemorizedTabs />
      <div className="cities">
        <div className={`cities__places-container container${isEmptyOffers ? ' cities__places-container--empty' : ''}`}>
          {!isEmptyOffers ?
            <>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortOffers.length} place{sortOffers.length !== 1 ? 's' : ''} to stay in {currentCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by </span>
                  <span
                    className="places__sorting-type"
                    tabIndex={0}
                    onClick={() => setShowSort(!showSort)}
                  >
                    {sortType}
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <Sort onSortActive={onSortActive} currentSortType={sortType} showSort={showSort}/>
                </form>
                <Offers
                  offers={sortOffers}
                  onOfferHover={onOfferHover}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  offers={sortOffers}
                  activeOffer={activeOffer}
                />
              </div>
            </>
            : <OfferEmpty />}
        </div>
      </div>
    </main>
  );
}

export default MainPage;
