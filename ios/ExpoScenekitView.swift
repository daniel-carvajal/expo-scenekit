// iOS/ExpoScenekitView.swift - Updated version
import ExpoModulesCore
import SceneKit

class ExpoSceneKitView: ExpoView {
    let sceneView = SCNView()
    
    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        
        // Set up the SCNView
        sceneView.frame = bounds
        sceneView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        sceneView.backgroundColor = .black
        sceneView.allowsCameraControl = true
        sceneView.autoenablesDefaultLighting = true
        
        // Create a simple scene
        let scene = SCNScene()
        
        // Create a simple box - making it larger and with a bright color
        let boxNode = SCNNode()
        boxNode.geometry = SCNBox(width: 2.0, height: 2.0, length: 2.0, chamferRadius: 0.1)
        boxNode.geometry?.firstMaterial?.diffuse.contents = UIColor.red // Bright red color
        
        // Position the box directly in front of the camera, closer
        boxNode.position = SCNVector3(0, 0, -5)
        
        // Add animation to make it obvious
        let rotateAction = SCNAction.rotateBy(x: 0, y: 2 * .pi, z: 0, duration: 5)
        let repeatForever = SCNAction.repeatForever(rotateAction)
        boxNode.runAction(repeatForever)
        
        // Add the box to the scene
        scene.rootNode.addChildNode(boxNode)
        
        // Create and position a camera
        let cameraNode = SCNNode()
        cameraNode.camera = SCNCamera()
        cameraNode.position = SCNVector3(0, 0, 5)
        scene.rootNode.addChildNode(cameraNode)
        
        // Add a light to make sure the box is lit
        let lightNode = SCNNode()
        lightNode.light = SCNLight()
        lightNode.light?.type = .omni
        lightNode.position = SCNVector3(0, 10, 10)
        scene.rootNode.addChildNode(lightNode)
        
        // Set the scene to the view
        sceneView.scene = scene
        
        // Add the SCNView to our view
        addSubview(sceneView)
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        sceneView.frame = bounds
    }
}