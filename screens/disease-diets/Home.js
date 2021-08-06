import React from 'react'; 
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'; 
import Card from '@material-ui/core/Card'; 
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'; 
import { Typography } from '@material-ui/core/';
import styles from './Styles.css'

export default class Home extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Grid space={3} justify={'center'}>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography type="headline" component="h1" gutterBottom>
                            this is a disease. 
                        </Typography>
                    </CardContent>
                </Grid>
                </Grid>
            </View>
        )
    }
}
