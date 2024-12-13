const Status = {
    BACKLOG: `backlog`,
    PROCESSING: `processing`,
    DONE: `done`,
    BASKET: `basket`,
  };
  

const StatusLabel = {
    [Status.BACKLOG]: `Бэклог`,
    [Status.PROCESSING]: `В процессе`,
    [Status.DONE]: `Готово`,
    [Status.BASKET]: `Корзина`,
  };

const StatusIdPrefix = {
    [Status.BACKLOG]: `backlog`,
    [Status.PROCESSING]: `process`,
    [Status.DONE]: `ready`,
    [Status.BASKET]: `basket`,
};

export {Status, StatusLabel, StatusIdPrefix};
