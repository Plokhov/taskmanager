import React from "react";

export const Board = () => {
  return <div>
    <section className="main__control control container">
      <h1 className="control__title">TASKMANAGER</h1>
      <section className="control__btn-wrap">
        <input
          type="radio"
          name="control"
          id="control__new-task"
          className="control__input visually-hidden"
        />
        <label
          htmlFor="control__new-task"
          className="control__label control__label--new-task"
        >
          + ADD NEW TASK
        </label>
        <input
          type="radio"
          name="control"
          id="control__task"
          className="control__input visually-hidden"
          checked
        />
        <label htmlFor="control__task" className="control__label">TASKS</label>
        <input
          type="radio"
          name="control"
          id="control__statistic"
          className="control__input visually-hidden"
        />
        <label htmlFor="control__statistic" className="control__label">
          STATISTICS
        </label>
      </section>
    </section>

    <section className="main__filter filter container">
      <input
        type="radio"
        id="filter__all"
        className="filter__input visually-hidden"
        name="filter"
        checked
      />
      <label htmlFor="filter__all" className="filter__label">
        All <span className="filter__all-count">13</span>
      </label>
      <input
        type="radio"
        id="filter__overdue"
        className="filter__input visually-hidden"
        name="filter"
        disabled
      />
      <label htmlFor="filter__overdue" className="filter__label">
        Overdue <span className="filter__overdue-count">0</span>
      </label>
      <input
        type="radio"
        id="filter__today"
        className="filter__input visually-hidden"
        name="filter"
        disabled
      />
      <label htmlFor="filter__today" className="filter__label">
        Today <span className="filter__today-count">0</span>
      </label>
      <input
        type="radio"
        id="filter__favorites"
        className="filter__input visually-hidden"
        name="filter"
      />
      <label htmlFor="filter__favorites" className="filter__label">
        Favorites <span className="filter__favorites-count">1</span>
      </label>
      <input
        type="radio"
        id="filter__repeating"
        className="filter__input visually-hidden"
        name="filter"
      />
      <label htmlFor="filter__repeating" className="filter__label">
        Repeating <span className="filter__repeating-count">1</span>
      </label>
      <input
        type="radio"
        id="filter__archive"
        className="filter__input visually-hidden"
        name="filter"
      />
      <label htmlFor="filter__archive" className="filter__label">
        Archive <span className="filter__archive-count">115</span>
      </label>
    </section>

    <section className="board container">
      <div className="board__filter-list">
        <a href="#" className="board__filter">SORT BY DEFAULT</a>
        <a href="#" className="board__filter">SORT BY DATE up</a>
        <a href="#" className="board__filter">SORT BY DATE down</a>
      </div>

      <div className="board__tasks">
        <article className="card card--black">
          <div className="card__form">
            <div className="card__inner">
              <div className="card__control">
                <button type="button" className="card__btn card__btn--edit">
                  edit
                </button>
                <button type="button" className="card__btn card__btn--archive">
                  archive
                </button>
                <button
                  type="button"
                  className="card__btn card__btn--favorites"
                >
                  favorites
                </button>
              </div>

              <div className="card__color-bar">
                <svg className="card__color-bar-wave" width="100%" height="10">
                  <use xlinkHref="#wave"></use>
                </svg>
              </div>

              <div className="card__textarea-wrap">
                <p className="card__text">Example task with default color.</p>
              </div>

              <div className="card__settings">
                <div className="card__details">
                  <div className="card__dates">
                    <div className="card__date-deadline">
                      <p className="card__input-deadline-wrap">
                        <span className="card__date">23 September</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card card--blue">
          <div className="card__form">
            <div className="card__inner">
              <div className="card__control">
                <button type="button" className="card__btn card__btn--edit">
                  edit
                </button>
                <button type="button" className="card__btn card__btn--archive">
                  archive
                </button>
                <button
                  type="button"
                  className="card__btn card__btn--favorites"
                >
                  favorites
                </button>
              </div>

              <div className="card__color-bar">
                <svg className="card__color-bar-wave" width="100%" height="10">
                  <use xlinkHref="#wave"/>
                </svg>
              </div>

              <div className="card__textarea-wrap">
                <p className="card__text">Example task with custom color.</p>
              </div>

              <div className="card__settings">
                <div className="card__details">
                  <div className="card__dates">
                    <div className="card__date-deadline">
                      <p className="card__input-deadline-wrap">
                        <span className="card__date">23 September</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card card--yellow">
          <div className="card__form">
            <div className="card__inner">
              <div className="card__control">
                <button type="button" className="card__btn card__btn--edit">
                  edit
                </button>
                <button type="button" className="card__btn card__btn--archive">
                  archive
                </button>
                <button
                  type="button"
                  className="card__btn card__btn--favorites"
                >
                  favorites
                </button>
              </div>

              <div className="card__color-bar">
                <svg className="card__color-bar-wave" width="100%" height="10">
                  <use xlinkHref="#wave"/>
                </svg>
              </div>

              <div className="card__textarea-wrap">
                <p className="card__text">Example task with custom color and without date.</p>
              </div>

              <div className="card__settings">
                <div className="card__details">
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card__form">
            <div className="card__inner">
              <div className="card__control">
                <button type="button" className="card__btn card__btn--edit">
                  edit
                </button>
                <button type="button" className="card__btn card__btn--archive">
                  archive
                </button>
                <button
                  type="button"
                  className="card__btn card__btn--favorites card__btn--disabled"
                >
                  favorites
                </button>
              </div>

              <div className="card__color-bar">
                <svg className="card__color-bar-wave" width="100%" height="10">
                  <use xlinkHref="#wave"/>
                </svg>
              </div>

              <div className="card__textarea-wrap">
                <p className="card__text">Example task which marked as favorite.</p>
              </div>

              <div className="card__settings">
                <div className="card__details">
                  <div className="card__dates">
                    <div className="card__date-deadline">
                      <p className="card__input-deadline-wrap">
                        <span className="card__date">23 September</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card card--black">
          <div className="card__form">
            <div className="card__inner">
              <div className="card__control">
                <button type="button" className="card__btn card__btn--edit">
                  edit
                </button>
                <button type="button" className="card__btn card__btn--archive">
                  archive
                </button>
                <button
                  type="button"
                  className="card__btn card__btn--favorites"
                >
                  favorites
                </button>
              </div>

              <div className="card__color-bar">
                <svg className="card__color-bar-wave" width="100%" height="10">
                  <use xlinkHref="#wave"></use>
                </svg>
              </div>

              <div className="card__textarea-wrap">
                <p className="card__text">Example task without date.</p>
              </div>

              <div className="card__settings">
                <div className="card__details"></div>
              </div>
            </div>
          </div>
        </article>

        <article className="card card--pink card--repeat">
          <div className="card__form">
            <div className="card__inner">
              <div className="card__control">
                <button type="button" className="card__btn card__btn--edit">
                  edit
                </button>
                <button type="button" className="card__btn card__btn--archive">
                  archive
                </button>
                <button
                  type="button"
                  className="card__btn card__btn--favorites"
                >
                  favorites
                </button>
              </div>

              <div className="card__color-bar">
                <svg className="card__color-bar-wave" width="100%" height="10">
                  <use xlinkHref="#wave"/>
                </svg>
              </div>

              <div className="card__textarea-wrap">
                <p className="card__text">It is example of repeating task. It marks by wave.</p>
              </div>

              <div className="card__settings">
                <div className="card__details">
                  <div className="card__dates">
                    <div className="card__date-deadline">
                      <p className="card__input-deadline-wrap">
                        <span className="card__date">23 September</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card card--red card--deadline">
          <div className="card__form">
            <div className="card__inner">
              <div className="card__control">
                <button type="button" className="card__btn card__btn--edit">
                  edit
                </button>
                <button type="button" className="card__btn card__btn--archive">
                  archive
                </button>
                <button
                  type="button"
                  className="card__btn card__btn--favorites"
                >
                  favorites
                </button>
              </div>

              <div className="card__color-bar">
                <svg className="card__color-bar-wave" width="100%" height="10">
                  <use xlinkHref="#wave"/>
                </svg>
              </div>

              <div className="card__textarea-wrap">
                <p className="card__text">This is task with missing deadline.</p>
              </div>

              <div className="card__settings">
                <div className="card__details"></div>
              </div>
            </div>
          </div>
        </article>

        <article className="card card--black card--deadline">
          <div className="card__form">
            <div className="card__inner">
              <div className="card__control">
                <button type="button" className="card__btn card__btn--edit">
                  edit
                </button>
                <button type="button" className="card__btn card__btn--archive">
                  archive
                </button>
                <button
                  type="button"
                  className="card__btn card__btn--favorites"
                >
                  favorites
                </button>
              </div>

              <div className="card__color-bar">
                <svg className="card__color-bar-wave" width="100%" height="10">
                  <use xlinkHref="#wave"/>
                </svg>
              </div>

              <div className="card__textarea-wrap">
                <p className="card__text">This is task with missing deadline. Deadline always marked by red line.</p>
              </div>

              <div className="card__settings">
                <div className="card__details">
                  <div className="card__dates">
                    <div className="card__date-deadline">
                      <p className="card__input-deadline-wrap">
                        <span className="card__date">23 September</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <button className="load-more" type="button">load more</button>
    </section>
  </div>;
};
