import React from 'react'
import Card from '../../components/Card/Card'
import CardHeader from '../../components/Card/CardHeader'
import CardBody from '../../components/Card/CardBody'
import withStyles from "@material-ui/core/styles/withStyles";
import Code from '../../components/Code/Code'
const styles = theme => ({
    root: {
        width: '25%',
        margin: 5,
        [theme.breakpoints.down(780)]: {
            width: '33.3%',
        },
        [theme.breakpoints.down(600)]: {
            width: '50%',
        },
        [theme.breakpoints.down(400)]: {
            width: '100%',
        }
    }
})
const Instruction = (props) => {
    const { classes, data } = props
    const { tag, label, nuggets } = data
    return (<div className={classes.root}>
        <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>{tag.toUpperCase()}</h4>
                <p className={classes.cardCategoryWhite}>
                    {label}
                </p>
            </CardHeader>
            <CardBody>
                {nuggets.map(nugget => {
                    return (<div key={nugget.text}>
                        <p>{nugget.text}</p>
                        <Code language='sh' snippet={nugget.code} />
                    </div>)
                })}
            </CardBody>

        </Card>
    </div>)

}
export default withStyles(styles)(Instruction)