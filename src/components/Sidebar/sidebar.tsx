import Styles from './sidebar.module.css'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
const React = require('react');

export default function sidebar({items }: {items: any}) {
    return (
        <div className="sidebar">
      <List disablePadding dense>
        {items.map(({ label, name, ...rest }: {label: any, name: any}) => (
          <ListItem key={name} button {...rest}>
            <ListItemText>{label}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
    )
}

