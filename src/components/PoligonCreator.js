import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native'

import MapView, {
    MAP_TYPES,
    Polygon,
    ProviderPropType,
    PROVIDER_GOOGLE
} from 'react-native-maps'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
let id = 0

class PoligonCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            },
            polygons: [],
            editing: null,
            creatingHole: false
        }
    }

    finish() {
        const { polygons, editing } = this.state;
        this.setState({
            polygons: [...polygons, editing],
            editing: null,
            creatingHole: false,
        });
    }

    clear = () => {
        this.setState({
            polygons: [],
            editing: null,
            creatingHole: false
        })
    }

    createHole() {
        const { editing, creatingHole } = this.state
        if (!creatingHole) {
            this.setState({
                creatingHole: true,
                editing: {
                    ...editing,
                    holes: [...editing.holes, []]
                }
            })
        } else {
            const holes = [...editing.holes]
            if (holes[holes.length - 1].length === 0) {
                holes.pop()
                this.setState({
                    editing: {
                        ...editing,
                        holes
                    }
                })
            }
            this.setState({ creatingHole: false })
        }
    }

    onPress(e) {
        const { editing, creatingHole } = this.state
        if (!editing) {
            this.setState({
                editing: {
                    id: id++,
                    coordinates: [e.nativeEvent.coordinate],
                    holes: []
                }
            })
        } else if (!creatingHole) {
            this.setState({
                editing: {
                    ...editing,
                    coordinates: [...editing.coordinates, e.nativeEvent.coordinate]
                }
            })
        } else {
            const holes = [...editing.holes]
            holes[holes.length - 1] = [
                ...holes[holes.length - 1],
                e.nativeEvent.coordinate
            ]
            this.setState({
                editing: {
                    ...editing,
                    id: id++, // keep incrementing id to trigger display refresh
                    coordinates: [...editing.coordinates],
                    holes
                }
            })
        }
    }

    render() {
        const mapOptions = {
            scrollEnabled: true
        }

        if (this.state.editing) {
            mapOptions.scrollEnabled = false
            mapOptions.onPanDrag = e => this.onPress(e)
        }

        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    mapType={MAP_TYPES.SATELLITE}
                    initialRegion={this.state.region}
                    onPress={e => this.onPress(e)}
                    {...mapOptions}
                >
                    {this.state.polygons.map(polygon => (
                        <Polygon
                            key={polygon.id}
                            coordinates={polygon.coordinates}
                            holes={polygon.holes}
                            strokeColor="#F00"
                            fillColor="rgba(255,0,0,0.5)"
                            strokeWidth={1}
                        />
                    ))}
                    {this.state.editing && (
                        <Polygon
                            key={this.state.editing.id}
                            coordinates={this.state.editing.coordinates}
                            holes={this.state.editing.holes}
                            strokeColor="#000"
                            fillColor="rgba(255,0,0,0.5)"
                            strokeWidth={1}
                        />
                    )}
                </MapView>

                <View style={styles.buttonContainer}>
                    {this.state.editing && (
                        <TouchableOpacity
                            onPress={() => this.createHole()}
                            style={[styles.bubble, styles.button]}
                        >
                            <Text>
                                {this.state.creatingHole ? 'Завершить' : 'Создать'}
                            </Text>
                        </TouchableOpacity>
                    )}
                    {this.state.editing && (
                        <TouchableOpacity
                            onPress={() => this.finish()}
                            style={[styles.bubble, styles.button]}
                        >
                            <Text>Finish</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <TouchableOpacity
                    onPress={() => this.clear()}
                    style={[styles.bubble, styles.button, styles.buttonClear]}
                >
                    <Text>Очистить</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

PoligonCreator.propTypes = {
    provider: ProviderPropType
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 17,
    },
    button: {
        borderRadius: 16,
        height: 56,
        width: "49%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },
    buttonText: {
        fontFamily: 'Inter-Medium',
        color: "#000",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        paddingHorizontal: 20,
        height: 60,
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
    },
    buttonClear: {
        marginBottom: 10
    }
});

export default PoligonCreator