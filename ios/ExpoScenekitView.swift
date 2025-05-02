// iOS/ExpoScenekitView.swift
import ExpoModulesCore
import SceneKit

class ExpoSceneKitView: ExpoView {
    let sceneView = SCNView()
    private var isSceneLoaded = false
    let viewUUID = NSUUID().uuidString
    let onViewReady = EventDispatcher()

    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        
        // Set up the SCNView but don't add any default scene
        sceneView.frame = bounds
        sceneView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        sceneView.backgroundColor = .clear
        sceneView.allowsCameraControl = true
        sceneView.autoenablesDefaultLighting = true
        
        // Add the SCNView to our view
        addSubview(sceneView)
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        sceneView.frame = bounds
        
        // Send the view ready event
        onViewReady(["uuid": viewUUID])
    }
    
    // Load scene from the provided path
    func loadSceneFromPath(_ path: String) {
        guard !isSceneLoaded else { return }
        
        print("📥 Loading scene from path: \(path)")
        
        // Check if it's a URL or a bundle resource
        if path.hasPrefix("http://") || path.hasPrefix("https://") || path.hasPrefix("file://") {
            // Load from URL
            if let url = URL(string: path) {
                loadSceneFromURL(url)
            } else {
                print("❌ Invalid URL: \(path)")
            }
        } else {
            // Load from bundle
            loadSceneFromBundle(named: path)
        }
    }
    
    // Load scene from URL
    private func loadSceneFromURL(_ url: URL) {
        do {
            let scene = try SCNScene(url: url, options: nil)
            
            DispatchQueue.main.async {
                self.sceneView.scene = scene
                self.isSceneLoaded = true
                self.ensureBasicSceneLighting(scene: scene)
                print("✅ Successfully loaded scene from URL")
            }
        } catch {
            print("❌ Error loading scene from URL: \(error.localizedDescription)")
        }
    }
    
    // Load scene from bundle
    private func loadSceneFromBundle(named sceneName: String) {
        guard let scene = SCNScene(named: sceneName) else {
            print("❌ Failed to load scene from bundle: \(sceneName)")
            return
        }
        
        DispatchQueue.main.async {
            self.sceneView.scene = scene
            self.isSceneLoaded = true
            self.ensureBasicSceneLighting(scene: scene)
            print("✅ Successfully loaded scene from bundle: \(sceneName)")
        }
    }
    
    // Make sure the scene has lighting
    private func ensureBasicSceneLighting(scene: SCNScene) {
        sceneView.autoenablesDefaultLighting = true
        
        // Check if scene has lights
        var hasLights = false
        scene.rootNode.enumerateHierarchy { (node, _) in
            if node.light != nil {
                hasLights = true
            }
        }
        
        if !hasLights {
            print("💡 Adding light to scene")
            let lightNode = SCNNode()
            lightNode.light = SCNLight()
            lightNode.light?.type = .omni
            lightNode.position = SCNVector3(0, 10, 10)
            scene.rootNode.addChildNode(lightNode)
        }
        
        // Check if scene has camera
        var hasCamera = false
        scene.rootNode.enumerateHierarchy { (node, _) in
            if node.camera != nil {
                hasCamera = true
            }
        }
        
        if !hasCamera {
            print("📷 Adding camera to scene")
            let cameraNode = SCNNode()
            cameraNode.camera = SCNCamera()
            cameraNode.position = SCNVector3(0, 0, 5)
            scene.rootNode.addChildNode(cameraNode)
        }
    }
}