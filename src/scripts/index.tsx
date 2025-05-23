import React from 'react';
import { createRoot } from 'react-dom/client';

import Info from './components/info';
import Settings from './components/settings';

import '../styles/index.scss';

interface IndexProps {}

interface IndexState {
  settingsOpened: boolean;
}

export default class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);

    this.state = {
      settingsOpened: false,
    };
  }

  render() {
    const content = this.state.settingsOpened ? <Settings /> : <Info />;

    return (
      <div className='container'>
        {content}
        <button
          className='smallButton settings'
          onClick={() => {
            this.setState({ settingsOpened: !this.state.settingsOpened });
          }}
        >
          <svg
            className='icon'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            aria-hidden='true'
            role='img'
            width='1em'
            height='1em'
            preserveAspectRatio='xMidYMid meet'
            viewBox='0 0 256 256'
          >
            <path
              d='M128.003 72a56 56 0 1 0 56 56a56.064 56.064 0 0 0-56-56zm0 88a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32zm110.006-11.995l-14.07-18.756c.002-.849-.002-1.693-.011-2.483L238.002 108a11.999 11.999 0 0 0 1.985-10.327a115.452 115.452 0 0 0-11.343-27.41a11.998 11.998 0 0 0-8.71-5.903l-23.12-3.302q-.923-.947-1.87-1.87l-3.301-23.11a12.002 12.002 0 0 0-5.899-8.707a115.475 115.475 0 0 0-27.403-11.361a12 12 0 0 0-10.333 1.984L129.325 32.01q-1.324-.018-2.645 0l-18.676-14.008a12.005 12.005 0 0 0-10.327-1.985A115.48 115.48 0 0 0 70.266 27.36a12 12 0 0 0-5.902 8.71l-3.302 23.12q-.948.923-1.87 1.871l-23.111 3.3a12 12 0 0 0-8.706 5.899a115.459 115.459 0 0 0-11.361 27.404a12 12 0 0 0 1.984 10.332l14.07 18.756c-.003.849.002 1.693.011 2.483L18.005 148a11.999 11.999 0 0 0-1.985 10.327a115.452 115.452 0 0 0 11.343 27.41a11.998 11.998 0 0 0 8.71 5.903l23.12 3.302q.923.947 1.87 1.87l3.301 23.11a12.002 12.002 0 0 0 5.899 8.707a115.475 115.475 0 0 0 27.403 11.361a12 12 0 0 0 10.333-1.984l18.683-14.015q1.324.018 2.645 0L148.003 238a12 12 0 0 0 10.327 1.985a115.48 115.48 0 0 0 27.411-11.343a12 12 0 0 0 5.902-8.71l3.315-23.21c.6-.599 1.194-1.2 1.747-1.764l23.22-3.317a12 12 0 0 0 8.707-5.899a115.458 115.458 0 0 0 11.361-27.404a12 12 0 0 0-1.984-10.332zm-27.491 20.735l-21.299 3.042a12.001 12.001 0 0 0-7.042 3.656c-1.671 1.775-4.905 5.107-6.466 6.49a11.998 11.998 0 0 0-3.925 7.289l-3.042 21.303a91.422 91.422 0 0 1-11.202 4.633l-17.209-12.907a11.996 11.996 0 0 0-7.928-2.379a72.691 72.691 0 0 1-8.8 0a12 12 0 0 0-7.93 2.379l-17.214 12.912a91.554 91.554 0 0 1-11.197-4.643l-3.041-21.297a12.003 12.003 0 0 0-3.925-7.288a72.732 72.732 0 0 1-6.223-6.223a12 12 0 0 0-7.288-3.924l-21.303-3.042a91.487 91.487 0 0 1-4.634-11.201l12.909-17.211a11.998 11.998 0 0 0 2.394-7.566c-.073-2.432-.143-7.071-.016-9.161a11.999 11.999 0 0 0-2.379-7.93L40.846 98.46a91.509 91.509 0 0 1 4.643-11.198l21.297-3.041a12.001 12.001 0 0 0 7.288-3.925a72.707 72.707 0 0 1 6.222-6.222a11.998 11.998 0 0 0 3.925-7.289l3.042-21.303a91.419 91.419 0 0 1 11.201-4.633l17.21 12.907a12.008 12.008 0 0 0 7.928 2.379a72.887 72.887 0 0 1 8.8 0a12 12 0 0 0 7.929-2.379l17.214-12.912a91.553 91.553 0 0 1 11.198 4.643l3.041 21.297a12.003 12.003 0 0 0 3.925 7.288a72.73 72.73 0 0 1 6.223 6.223a12 12 0 0 0 7.288 3.924l21.302 3.042a91.489 91.489 0 0 1 4.635 11.201l-12.909 17.211a11.998 11.998 0 0 0-2.394 7.566c.073 2.432.143 7.071.016 9.16a11.999 11.999 0 0 0 2.379 7.93l12.912 17.214a91.51 91.51 0 0 1-4.643 11.198z'
              fill='currentColor'
            />
          </svg>
        </button>
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
