export const initialContentState = {
  entityMap: {
    0: {
      type: 'EMBEDDED_LINK',
      mutability: 'MUTABLE',
      data: {
        link: 'https://www.youtube.com/embed/THqXD6XGoUA',
        height: 'auto',
        width: '100%',
      },
    },
  },
  blocks: [
    {
      key: '4vla1',
      text: 'Demo of embedded links, this work so awesome with DraftJS:',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '1gls3',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [{
        offset: 0,
        length: 1,
        key: 0,
      }],
      data: {},
    },
    {
      key: '4m681',
      text: 'This is cool. Check by typing more here ...',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};
