function Footer() {
  return (
    <div className="w-full">
      {/* <div className="bg-slate-500 text-slate-200 text-sm">
        <p>OPEN EVERY DAY 10AM – 5PM</p>
        <p>
          ADDRESS
          <br />
          99/99 Convent Road, Silom, Bangrak, Bangkok 10500, Thailand
        </p>
        <p>
          TELEPHONE <br /> 099-999-9999
        </p>
      </div> */}
      <footer className="footer p-5 bg-red-600 text-white">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="font-medium">
            Create By OHm Ratchatrin
            <br />
            Full-stack Developer
          </p>
        </aside>
        <nav>
          <h6 className="font-semibold text-lg">Social</h6>
          <div className="grid grid-flow-col gap-4 items-center">
            <a
              href="https://www.youtube.com/channel/UC_38e8FKQRlgPyE3p3S4zdA"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/s.ratchatrin/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="https://github.com/Ratchatrin" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  fill="#b6c9d6"
                  d="M28.5,15c0,7.515-6.123,13.5-13.5,13.5C7.624,28.5,1.5,22.515,1.5,15S7.485,1.5,15,1.5 S28.5,7.485,28.5,15z"
                ></path>
                <path
                  fill="#fff"
                  d="M24.317,14.522c0,1.631-0.843,3.898-2.227,5.024c-1.119,0.912-2.597,1.199-4.268,1.29 c0.628,0.381,1.046,1.072,1.046,1.86v5.402c-1.053,0.262-2.15,0.403-3.28,0.403c-1.119,0-2.212-0.138-3.258-0.4v-3.549 c-0.454,0.142-1.05,0.225-1.816,0.185c-2.543-0.134-2.906-1.678-3.313-2.768c-0.41-1.09-1.682-1.228-1.5-1.678 c0.878-0.301,1.567-0.014,2.033,0.341c0.37,0.282,0.628,0.68,0.8,1.111c0.197,0.493,0.721,1.316,2.023,1.316 c0.919,0,1.464-0.214,1.776-0.425c0.018-0.77,0.44-1.438,1.057-1.805c-1.773-0.113-3.327-0.447-4.472-1.442 c-1.271-1.104-2.038-3.309-2.038-4.864c0-1.297,0.534-2.895,1.449-3.901c0.029-0.029,0.055-0.062,0.091-0.091 C8.211,9.898,7.967,8.648,8.559,7.119c1.762-0.033,3.153,0.93,3.72,1.395c1.024-0.236,2.143-0.349,3.32-0.349 c1.206,0,2.358,0.105,3.4,0.349c0.567-0.465,1.962-1.428,3.72-1.391c0.618,1.591,0.331,2.881,0.116,3.484 C23.772,11.685,24.317,13.214,24.317,14.522z"
                ></path>
                <path
                  fill="#788b9c"
                  d="M15,29C7.28,29,1,22.72,1,15C1,7.149,7.149,1,15,1s14,6.149,14,14C29,22.72,22.72,29,15,29z M15,2C7.71,2,2,7.71,2,15c0,7.168,5.832,13,13,13s13-5.832,13-13C28,7.71,22.29,2,15,2z"
                ></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
