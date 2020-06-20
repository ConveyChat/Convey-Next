import React from 'react'
const MyWindowPortal = require('./windowPortal').default;

export default class sidebar extends React.PureComponent<{}, { counter: number, showWindowPortal: boolean }> {
  constructor(props:any) {
    super(props);
    
    this.state = {
      counter: 0,
      showWindowPortal: false,
    };
    
    this.toggleWindowPortal = this.toggleWindowPortal.bind(this);
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState(state => ({
        ...state,
        counter: state.counter + 1,
      }));
    }, 1000);
  }
  
  toggleWindowPortal() {
    this.setState(state => ({
      ...state,
      showWindowPortal: !state.showWindowPortal,
    }));
  }
  
  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        
        <button onClick={this.toggleWindowPortal}>
          {this.state.showWindowPortal ? 'Close the' : 'Open a'} Portal
        </button>
        
        {this.state.showWindowPortal && (
          <MyWindowPortal>
            hello
            <h1>Counter in a portal: {this.state.counter}</h1>
            <p>Even though I render in a different window, I share state!</p>
            
            <button onClick={() => this.setState({ showWindowPortal: false })} >
              Close me!
            </button>
          </MyWindowPortal>
        )}
      </div>
    );
  }
}

// interface Props {
//   title: string;                          // The title of the popout window
//   closeWindow: () => void;                // Callback to close the popout
// }

// interface State {
//   externalWindow: Window | null;          // The popout window
//   containerElement: HTMLElement | null;   // The root element of the popout window
// }

// export default class Popout extends React.Component<Props, State> {
//   constructor(props: Props) {
//       super(props);
//       this.state = {
//           externalWindow: null,
//           containerElement: null
//       };
//   }
//   // We need a state field to govern whether the popout is shown or not

//   // This sets the above state variable
//   private setPopoutOpen(open: boolean) {
//     this.setState({
//         showPopout: open
//     });
//   }

//     // When we create this component, open a new window
//     public componentDidMount() {
//       const features = 'width=800, height=500, left=300, top=200';
//       const externalWindow = window.open('', '', features);

//       let containerElement = null;
//       if (externalWindow) {
//           containerElement = externalWindow.document.createElement('div');
//           externalWindow.document.body.appendChild(containerElement);

//           // Copy the app's styles into the new window
//           const stylesheets = Array.from(document.styleSheets);
//           stylesheets.forEach(stylesheet => {
//               const css = stylesheet as CSSStyleSheet;

//               if (stylesheet.href) {
//                   const newStyleElement = document.createElement('link');
//                   newStyleElement.rel = 'stylesheet';
//                   newStyleElement.href = stylesheet.href;
//                   externalWindow.document.head.appendChild(newStyleElement);
//               } else if (css && css.cssRules && css.cssRules.length > 0) {
//                   const newStyleElement = document.createElement('style');
//                   Array.from(css.cssRules).forEach(rule => {
//                       newStyleElement.appendChild(document.createTextNode(rule.cssText));
//                   });
//                   externalWindow.document.head.appendChild(newStyleElement);
//               }
//           });

//           externalWindow.document.title = this.props.title;

//           // Make sure the window closes when the component unloads
//           externalWindow.addEventListener('beforeunload', () => {
//               this.props.closeWindow();
//           });
//       }

//       this.setState({
//           externalWindow: externalWindow,
//           containerElement: containerElement
//       });
//   }

//   // Make sure the window closes when the component unmounts
//   public componentWillUnmount() {
//       if (this.state.externalWindow) {
//           this.state.externalWindow.close();
//       }
//   }

//   // This returns the HTML for the popout, or null if the popout isn't visible
//   private getPopout() {
//     if (!this.state.showPopout) {
//         return null;
//     }

//     return (
//         <Popout>
//             <div>YOUR POPOUT CONTENT HERE</div>
//         </Popout>
//     );
//   }

//   // Render the popout and a button to show / hide it
//   public render() {
//     return (
//         <div>
//             {this.getPopout()}
//             <button onClick={() => this.setPopoutOpen(!this.state.showPopout)}>
//                 toggle popout
//             </button>
//         </div>
//     );
//   }
   
//     openCompose() {
//       window.open('file:///Users/darcysimmons/Desktop/Convey-Next/src/components/ComposeWindow/composewindow.tsx');
//     }
//   // render(){
//   //   return (
//   //   <div className="sidebar">
//   //   <List disablePadding dense>
//   //   {/* {items.map(({ label, name, ...rest }: {label: any, name: any}) => ( */}
//   //     <ListItem>
//   //       <ListItemText onClick={openCompose} >Compose</ListItemText>
//   //     </ListItem>
//   //     <ListItem>
//   //       <ListItemText>Inbox</ListItemText>
//   //     </ListItem>
//   //     <ListItem>
//   //       <ListItemText>Sent</ListItemText>
//   //     </ListItem>
//   //     <ListItem>
//   //       <ListItemText>Saved</ListItemText>
//   //     </ListItem>
//   //     <ListItem>
//   //       <ListItemText>Settings</ListItemText>
//   //     </ListItem>
//   //   </List>
//   //   </div>
//   //   )
//   // }
// }

